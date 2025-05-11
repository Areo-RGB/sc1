<script lang="ts">
  import { AppsMenu, UserMenu, NotificationList, ThemeToggle } from '$lib';
  import { Dropdown, DropdownItem, NavBrand, NavLi, NavUl, Navbar, Search, DropdownDivider } from 'flowbite-svelte';
  import {
    ArchiveSolid,
    ArrowRightToBracketOutline,
    CogOutline,
    DollarOutline,
    InboxOutline,
    ProfileCardOutline,
    SalePercentOutline,
    ShoppingBagSolid,
    UsersGroupSolid,
    AnnotationSolid,
    CameraPhotoOutline,
    DownloadSolid,
    HeartSolid,
    ChevronDownOutline 
  } from 'flowbite-svelte-icons';
  
  import '../../app.css';
  import Users from '../data/users.json';

  import type { NotificationProps } from '$lib/types';

  type NotificationData = Omit<NotificationProps, 'children'> & {
    content: string;
  };

  interface Props {
    fluid?: boolean;
    drawerHidden?: boolean;
    list?: boolean;
  }

  let { fluid = true, drawerHidden = $bindable(false), list = false }: Props = $props();
  const menu = [
    { name: 'Dashboard', href: '/dashboard', icon: ShoppingBagSolid }
  ];
  const menuItems = ['Dashboard'];

  const notifications: NotificationData[] = [
    {
      src: Users[0].avatar,
      Icon: DownloadSolid,
      when: 'a few moments ago',
      color: 'purple',
      content: `New message from <span class="font-semibold text-gray-900 dark:text-white">Bonnie Green</span>: "Hey, what's up? All set for the presentation?"`,
    },
    {
      src: Users[1].avatar,
      Icon: UsersGroupSolid,
      when: '10 minutes ago',
      color: 'gray',
      content: `<span class="font-semibold text-gray-900 dark:text-white">Jese leos</span> and <span class="font-medium text-gray-900 dark:text-white">5 others</span> started following you.`,
    },
    {
      src: Users[3].avatar,
      Icon: HeartSolid,
      when: '44 minutes ago',
      color: 'red',
      content: `<span class="font-semibold text-gray-900 dark:text-white">Joseph Mcfall</span> and <span class="font-medium text-gray-900 dark:text-white">141 others</span> love your story. See it and view more stories.`,
    },
    {
      src: Users[4].avatar,
      Icon: AnnotationSolid,
      when: '1 hour ago',
      color: 'green',
      content: `<span class="font-semibold text-gray-900 dark:text-white">Leslie Livingston</span> mentioned you in a comment: <span class="text-primary-700 dark:text-primary-500 font-medium">@bonnie.green</span> what do you say?`,
    },
    {
      src: Users[5].avatar,
      Icon: CameraPhotoOutline,
      when: '3 hours ago',
      color: 'purple',
      content: `<span class="font-semibold text-gray-900 dark:text-white">Robert Brown</span> posted a new video: Glassmorphism - learn how to implement the new design trend.`,
    },
  ];
</script>

<Navbar class="mx-10 sm:mx-0">
  <NavBrand href="/" class="mx-10">
    <img src="https://data3.fra1.cdn.digitaloceanspaces.com/Bilder/lo.png" class="me-2.5 h-6 sm:h-8" alt="QuoVadis Logo" />
    <span class="ml-px self-center text-xl font-semibold whitespace-nowrap sm:text-2xl dark:text-white"> QuoVadis </span>
  </NavBrand>
  <div class="hidden lg:block lg:ps-3">
    {#if list}      <NavUl class="ml-2" activeUrl="/" activeClass="text-primary-600 dark:text-primary-500">
        <NavLi href="/">Home</NavLi>
        <NavLi href="/dashboard">Dashboard</NavLi>
      </NavUl>
    {:else}
      <form>
        <Search size="md" class="mt-1 w-96 border focus:outline-none" />
      </form>
    {/if}
  </div>
  <div class="ms-auto flex items-center text-gray-500 sm:order-2 dark:text-gray-300">
    <NotificationList {notifications}/>
    <AppsMenu {menu} />
    <ThemeToggle />
    <UserMenu {...Users[4]} {menuItems}>
      <DropdownDivider />
      <DropdownItem>Sign out</DropdownItem>
    </UserMenu>
  </div>
</Navbar>
