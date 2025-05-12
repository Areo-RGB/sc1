<script lang="ts">
  import { Avatar, Card, Heading, Popover, Dropdown, DropdownItem } from 'flowbite-svelte';
  import { Change } from '$lib';
  import { ChevronDownOutline } from 'flowbite-svelte-icons';
  import { getTestResults, getTestDisplayInfo, type TestResult, getUniqueTests } from './athleticsData';

  // Get all available test types and sort them by category
  const testTypes = getUniqueTests().sort();

  // Generate random change percentage between -5 and +15
  function getRandomChange() {
    return (Math.random() * 20 - 5).toFixed(1);
  }

  // Format test name for display
  function formatTestName(testName: string): string {
    return testName;
  }

  // Create athletic data for each test
  function getTestData(testName: string) {
    const results = getTestResults(testName).sort((a, b) => a.result - b.result);
    const displayInfo = getTestDisplayInfo(testName);
    const unit = displayInfo.unit;

    return {
      title: displayInfo.title,
      subtitle: displayInfo.subtitle,
      unit,
      athletes: results.map(result => {
        const change = parseFloat(getRandomChange());
        return {
          ...result,
          change: change,
          initials: result.name.substring(0, 2)
        };
      })
    };
  }

  // Process all tests
  const allTestsData = testTypes.map(test => ({
    testName: test,
    displayName: formatTestName(test),
    data: getTestData(test)
  }));

  // Keep track of the active test
  let activeTestIndex = 0;
  let activeTest = allTestsData[activeTestIndex];

  // Change the active test
  function setActiveTest(index: number): void {
    activeTestIndex = index;
    activeTest = allTestsData[activeTestIndex];
  }
</script>

<Card size="xl" class="p-4 sm:p-6 w-full">
  <div class="mb-4 flex items-center justify-between gap-2">
    <div class="flex items-center gap-2">
      <Heading tag="h3" class="w-fit text-lg font-semibold dark:text-white">
        Tabelle
      </Heading>
    </div>
    
    <!-- Drawer/Dropdown Navigation -->
    <div class="relative">
      <button id="testSelector" class="flex items-center px-4 py-2 min-w-[180px] text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700">
        {activeTest.displayName}
        <ChevronDownOutline class="w-4 h-4 ml-2" />
      </button>
      <Dropdown triggeredBy="#testSelector" class="w-56">
        {#each allTestsData as test, i}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div 
            role="button" 
            tabindex="0" 
            class="py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer {activeTestIndex === i ? 'bg-gray-100 dark:bg-gray-700' : ''}"
            on:click={() => setActiveTest(i)}
          >
            {test.displayName}
          </div>
        {/each}
      </Dropdown>
    </div>
  </div>

  <!-- Single Card Content -->
  <div class="overflow-hidden border border-gray-200 rounded-lg dark:border-gray-700">
    <div class="p-4 min-h-[300px] sm:min-h-0 overflow-y-auto">
      {#if activeTest.data.athletes.length > 0}
        <ul class="divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-800">
          {#each activeTest.data.athletes as athlete}
            <li class="py-3 sm:py-4">
              <div class="flex items-center justify-between">
                <div class="flex min-w-0 items-center">
                  <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-600">
                    <span class="font-medium text-gray-600 dark:text-gray-300">{athlete.initials}</span>
                  </div>
                  <div class="ml-3 max-w-[150px] sm:max-w-[180px] md:max-w-xs">
                    <p class="truncate font-medium text-gray-900 dark:text-white">
                      {athlete.name}
                    </p>
                    <Change value={athlete.change} size="xs" equalHeight class="ml-px" />
                  </div>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  {athlete.result} {activeTest.data.unit}
                </div>
              </div>
            </li>
          {/each}
        </ul>
      {:else}
        <div class="py-4 text-center text-gray-500">
          <p>No data available for this test.</p>
        </div>
      {/if}
    </div>
  </div>
</Card> 