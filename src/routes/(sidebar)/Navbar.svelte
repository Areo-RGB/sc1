<script lang="ts">
  import { AppsMenu, UserMenu, ThemeToggle } from '$lib';
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
    <AppsMenu {menu} />
    <ThemeToggle />
    <UserMenu {...Users[4]} {menuItems}>
      <DropdownDivider />
      <DropdownItem>Sign out</DropdownItem>
    </UserMenu>
  </div>
</Navbar>
