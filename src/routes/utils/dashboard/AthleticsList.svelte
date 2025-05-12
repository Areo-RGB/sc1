<script lang="ts">
  import { Avatar, Card, Heading, Popover, TabItem, Tabs } from 'flowbite-svelte';
  import { Change, More, DateRangeSelector } from '$lib';
  import { QuestionCircleSolid } from 'flowbite-svelte-icons';
  import { getTestResults, getTestDisplayInfo, type TestResult } from './athleticsData';

  export let testName: string;

  // Get the test results for this card
  $: results = getTestResults(testName).sort((a, b) => a.result - b.result);
  $: displayInfo = getTestDisplayInfo(testName);
  $: title = displayInfo.title;
  $: subtitle = displayInfo.subtitle;
  $: unit = displayInfo.unit;

  // Generate random change percentage between -5 and +15
  function getRandomChange() {
    return (Math.random() * 20 - 5).toFixed(1);
  }

  // Create athleteData with random changes
  $: athleteData = results.map(result => {
    const change = parseFloat(getRandomChange());
    return {
      ...result,
      change: change,
      initials: result.name.substring(0, 2)
    };
  });
</script>

<Card size="xl" class="p-4 sm:p-6 w-full">
  <div class="mb-4 flex items-center gap-2">
    <Heading tag="h3" class="w-fit text-lg font-semibold dark:text-white">
      {title}
    </Heading>
    <button>
      <span class="sr-only">Show information</span>
      <QuestionCircleSolid size="sm" class="text-gray-400 hover:text-gray-500" />
    </button>
    <Popover placement="bottom-start">
      <div class="w-72 space-y-2 text-sm font-normal text-gray-500 dark:text-gray-300">
        <h3 class="font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p>{subtitle}</p>
      </div>
    </Popover>
  </div>
  
  <div class="mb-4">
    <ul class="divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-800">
      {#each athleteData as { name, result, change, initials }, i}
        <li class="py-3 sm:py-4">
          <div class="flex items-center justify-between">
            <div class="flex min-w-0 items-center">
              <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-600">
                <span class="font-medium text-gray-600 dark:text-gray-300">{initials}</span>
              </div>
              <div class="ml-3">
                <p class="truncate font-medium text-gray-900 dark:text-white">
                  {name}
                </p>
                <Change value={change} size="sm" equalHeight class="ml-px" />
              </div>
            </div>
            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              {result} {unit}
            </div>
          </div>
        </li>
      {/each}
    </ul>
  </div>

  <div class="mt-4 flex items-center justify-between border-t border-gray-200 pt-3 sm:pt-6 dark:border-gray-700">
    <DateRangeSelector />
    <More title="Full Report" href="#top" />
  </div>
</Card> 