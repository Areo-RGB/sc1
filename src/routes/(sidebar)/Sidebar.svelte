<script lang="ts">
  import { afterNavigate } from '$app/navigation';
  import { page } from '$app/state';

  import { Sidebar, SidebarDropdownWrapper, SidebarGroup, SidebarItem, SidebarWrapper, SidebarButton, uiHelpers } from 'flowbite-svelte';
  import {
    AngleDownOutline,
    AngleUpOutline,
    ChartPieOutline
  } from 'flowbite-svelte-icons';

  interface Props {
    drawerHidden: boolean;
    docsRoute: string[];
  }
  let { drawerHidden = $bindable(false), docsRoute }: Props = $props();
  // console.log('data in Sidebar docsRoute:', docsRoute)
  const closeDrawer = () => {
    drawerHidden = true;
  };

  let iconClass = 'flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-300 dark:group-hover:text-white';
  let itemClass = 'flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700 w-full';
  let groupClass = 'pt-2 space-y-2 mb-3';

  let activeUrl = $derived(page.url.pathname);
  let activeMainSidebar: string;

  const sidebarUi = uiHelpers();
  let isOpen = $state(false);
  const closeSidebar = sidebarUi.close;
  $effect(() => {
    isOpen = sidebarUi.isOpen;
    activeUrl = page.url.pathname;
  });

  afterNavigate((navigation) => {
    // this fixes https://github.com/themesberg/flowbite-svelte/issues/364
    document.getElementById('svelte')?.scrollTo({ top: 0 });
    closeDrawer();

    activeMainSidebar = navigation.to?.url.pathname ?? '';
  });  let posts = [
    { name: 'Dashboard', Icon: ChartPieOutline, href: '/dashboard' }
  ];
  
  // No external links needed anymore
  let dropdowns = Object.fromEntries(Object.keys(posts).map((x) => [x, false]));
</script>

<SidebarButton breakpoint="lg" onclick={sidebarUi.toggle} class="fixed top-[22px] z-40 mb-2" />
<Sidebar breakpoint="lg" backdrop={false} {isOpen} {closeSidebar} params={{ x: -50, duration: 50 }} class="top-0 left-0 w-64 h-screen transition-transform bg-gray-50 dark:bg-gray-800 lg:block mt-[69px]" divClass="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800" activeClass="p-2" nonActiveClass="p-2">
  <h4 class="sr-only">Main menu</h4>
  <SidebarWrapper divClass="overflow-y-auto px-3 pt-20 lg:pt-5 h-full bg-white scrolling-touch max-w-2xs lg:h-[calc(100vh-4rem)] lg:block dark:bg-gray-800 lg:me-0 lg:sticky top-2">    <SidebarGroup class={groupClass}>
      {#each posts as { name, Icon, children, href } (name)}
        {#if children}
          <SidebarDropdownWrapper label={name} class="pr-3">
            {#snippet arrowdown()}
              <AngleDownOutline strokeWidth="3.3" size="sm" />
            {/snippet}
            {#snippet arrowup()}
              <AngleUpOutline strokeWidth="3.3" size="sm" />
            {/snippet}
            {#snippet icon()}
              <Icon class={iconClass} />
            {/snippet}
            {#each Object.entries(children) as [title, href]}
              <SidebarItem label={title} {href} spanClass="ml-9" class={itemClass} aClass="w-full" />
            {/each}
          </SidebarDropdownWrapper>
        {:else}
          <SidebarItem label={name} {href} spanClass="ml-3" class={itemClass} aClass="w-full p-0 py-2">
            {#snippet icon()}
              <Icon class={iconClass} />
            {/snippet}
          </SidebarItem>
        {/if}
      {/each}
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>
