<script lang="ts">
  import { PriceCard, PriceCardListItem, PriceCardPrice, Faq } from '$lib';
  import { P, Button, Heading } from 'flowbite-svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
  import { faqs, rows } from '../../data/pricing';
  import MetaTag from '../../utils/MetaTag.svelte';

  const path: string = '/pages/pricing';
  const description: string = 'Pricing page - Flowbite Svelte Admin Dashboard';
  const title: string = 'Flowbite Svelte Admin Dashboard - Pricing';
  const subtitle: string = 'Pricing';
</script>

<MetaTag {path} {description} {title} {subtitle} />

<div class="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
  <div class="mx-auto mb-8 max-w-screen-md text-center lg:mb-12">
    <Heading tag="h1" class="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">Our pricing plan made simple</Heading>
    <P size="xl" class="mb-5 font-light text-gray-500 dark:text-gray-400 sm:text-xl">We offer you different plans so that you can pick the right one for your needs. Test before you commit!</P>
  </div>
  <div class="space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-10">
    <PriceCard title="Starter">
      <PriceCardPrice price="$49" />
      <P class="mb-4 text-gray-500 dark:text-gray-400">The essentials to provide your best work for clients.</P>
      <ul role="list" class="mb-8 space-y-4 text-left">
        <PriceCardListItem>Individual configuration</PriceCardListItem>
        <PriceCardListItem>No setup, monthly, or hidden fees</PriceCardListItem>
        <PriceCardListItem>Team size: <b>1 developer</b></PriceCardListItem>
        <PriceCardListItem value={false}>Premium support</PriceCardListItem>
        <PriceCardListItem value={false}>Free updates</PriceCardListItem>
      </ul>
      <Button color="purple" class="w-full">Get started</Button>
    </PriceCard>
    <PriceCard title="Company" featured>
      <PriceCardPrice price="$99" />
      <P class="mb-4 text-gray-500 dark:text-gray-400">Best for large scale uses and extended redistribution rights.</P>
      <ul role="list" class="mb-8 space-y-4 text-left">
        <PriceCardListItem>Individual configuration</PriceCardListItem>
        <PriceCardListItem>No setup, monthly, or hidden fees</PriceCardListItem>
        <PriceCardListItem>Team size: <b>10 developers</b></PriceCardListItem>
        <PriceCardListItem>Premium support</PriceCardListItem>
        <PriceCardListItem value={false}>Free updates</PriceCardListItem>
      </ul>
      <Button color="purple" class="w-full">Get started</Button>
    </PriceCard>
    <PriceCard title="Enterprise">
      <PriceCardPrice price="$499" />
      <P class="mb-4 text-gray-500 dark:text-gray-400">Best for large scale uses and extended redistribution rights.</P>
      <ul role="list" class="mb-8 space-y-4 text-left">
        <PriceCardListItem>Individual configuration</PriceCardListItem>
        <PriceCardListItem>No setup, monthly, or hidden fees</PriceCardListItem>
        <PriceCardListItem>Team size: <b>100+ developers</b></PriceCardListItem>
        <PriceCardListItem>Premium support</PriceCardListItem>
        <PriceCardListItem>Free updates</PriceCardListItem>
      </ul>
      <Button color="purple" class="w-full">Get started</Button>
    </PriceCard>
  </div>
  
  <div class="mt-16">
    <Faq {faqs} title="Frequently asked questions" />
  </div>
  
  <div class="mt-8 flex justify-center">
    <Button href="/about" color="alternative">Learn more about our company<ArrowRightOutline class="ml-2" /></Button>
  </div>
</div>
