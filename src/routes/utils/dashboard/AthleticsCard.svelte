<script lang="ts">
  import { Card, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, P, Heading } from 'flowbite-svelte';
  import { More } from '$lib';
  import { getTestResults, getTestDisplayInfo, type TestResult } from './athleticsData';
  import { twMerge } from 'tailwind-merge';

  export let testName: string;
  export let class_ = '';
  
  // Get the test results for this card
  $: results = getTestResults(testName).sort((a, b) => a.result - b.result);
  $: displayInfo = getTestDisplayInfo(testName);
  $: title = displayInfo.title;
  $: subtitle = displayInfo.subtitle;
  $: unit = displayInfo.unit;
</script>

<Card class={twMerge("w-full p-4 sm:p-6 shadow-sm", class_)}>
  <div class="flex flex-col gap-4">
    <div class="mb-4">
      <Heading tag="h3" class="text-xl font-semibold mb-1 text-gray-900 dark:text-white">{title}</Heading>
      <P class="text-gray-500 dark:text-gray-400">{subtitle}</P>
    </div>
    <div class="overflow-x-auto max-h-96">
      <Table striped={true} class="w-full">
        <TableHead>
          <TableHeadCell class="bg-gray-50 dark:bg-gray-700">Rank</TableHeadCell>
          <TableHeadCell class="bg-gray-50 dark:bg-gray-700">Player</TableHeadCell>
          <TableHeadCell class="bg-gray-50 dark:bg-gray-700">Result ({unit})</TableHeadCell>
        </TableHead>
        <TableBody>
          {#each results as result, i}
            <TableBodyRow>
              <TableBodyCell>{i + 1}</TableBodyCell>
              <TableBodyCell class="font-medium">{result.name}</TableBodyCell>
              <TableBodyCell>{result.result}</TableBodyCell>
            </TableBodyRow>
          {/each}
        </TableBody>
      </Table>
    </div>
  </div>
</Card> 