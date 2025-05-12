<script lang="ts">
  import AthleticsCard from './AthleticsCard.svelte';

  export let class_ = '';
</script>

<AthleticsCard testName="Gewandtheit" class={class_} /> 