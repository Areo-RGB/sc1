export interface TestResult {
  category: string;
  test: string;
  name: string;
  result: number;
}

// All test results
export const allTestResults: TestResult[] = [
  // 10m Sprint data
  { category: "Schnelligkeit", test: "10m Sprint", name: "DFB-97", result: 1.99 },
  { category: "Schnelligkeit", test: "10m Sprint", name: "Finley", result: 1.99 },
  { category: "Schnelligkeit", test: "10m Sprint", name: "DFB-90", result: 2.05 },
  { category: "Schnelligkeit", test: "10m Sprint", name: "DFB-80", result: 2.10 },
  { category: "Schnelligkeit", test: "10m Sprint", name: "DFB-70", result: 2.13 },
  { category: "Schnelligkeit", test: "10m Sprint", name: "Alex", result: 2.16 },
  { category: "Schnelligkeit", test: "10m Sprint", name: "DFB-60", result: 2.16 },
  { category: "Schnelligkeit", test: "10m Sprint", name: "Bent", result: 2.19 },
  { category: "Schnelligkeit", test: "10m Sprint", name: "DFB-50", result: 2.18 },
  { category: "Schnelligkeit", test: "10m Sprint", name: "DFB-40", result: 2.21 },
  { category: "Schnelligkeit", test: "10m Sprint", name: "DFB-30", result: 2.24 },
  { category: "Schnelligkeit", test: "10m Sprint", name: "DFB-20", result: 2.28 },
  { category: "Schnelligkeit", test: "10m Sprint", name: "DFB-10", result: 2.33 },
  { category: "Schnelligkeit", test: "10m Sprint", name: "DFB-3", result: 2.39 },
  
  // 20m Sprint data
  { category: "Schnelligkeit", test: "20m Sprint", name: "DFB-97", result: 3.47 },
  { category: "Schnelligkeit", test: "20m Sprint", name: "DFB-90", result: 3.57 },
  { category: "Schnelligkeit", test: "20m Sprint", name: "Finley", result: 3.59 },
  { category: "Schnelligkeit", test: "20m Sprint", name: "DFB-80", result: 3.64 },
  { category: "Schnelligkeit", test: "20m Sprint", name: "DFB-70", result: 3.69 },
  { category: "Schnelligkeit", test: "20m Sprint", name: "DFB-60", result: 3.74 },
  { category: "Schnelligkeit", test: "20m Sprint", name: "Alex", result: 3.78 },
  { category: "Schnelligkeit", test: "20m Sprint", name: "DFB-50", result: 3.78 },
  { category: "Schnelligkeit", test: "20m Sprint", name: "Bent", result: 3.82 },
  { category: "Schnelligkeit", test: "20m Sprint", name: "DFB-40", result: 3.82 },
  { category: "Schnelligkeit", test: "20m Sprint", name: "DFB-30", result: 3.87 },
  { category: "Schnelligkeit", test: "20m Sprint", name: "DFB-20", result: 3.93 },
  { category: "Schnelligkeit", test: "20m Sprint", name: "DFB-10", result: 4.01 },
  { category: "Schnelligkeit", test: "20m Sprint", name: "DFB-3", result: 4.14 },
  
  // Gewandtheit data
  { category: "Beweglichkeit", test: "Gewandtheit", name: "Alex", result: 7.39 },
  { category: "Beweglichkeit", test: "Gewandtheit", name: "Finley", result: 7.81 },
  { category: "Beweglichkeit", test: "Gewandtheit", name: "DFB-97", result: 7.91 },
  { category: "Beweglichkeit", test: "Gewandtheit", name: "DFB-90", result: 8.11 },
  { category: "Beweglichkeit", test: "Gewandtheit", name: "Bent", result: 8.14 },
  { category: "Beweglichkeit", test: "Gewandtheit", name: "DFB-80", result: 8.28 },
  { category: "Beweglichkeit", test: "Gewandtheit", name: "DFB-70", result: 8.42 },
  { category: "Beweglichkeit", test: "Gewandtheit", name: "DFB-60", result: 8.54 },
  { category: "Beweglichkeit", test: "Gewandtheit", name: "DFB-50", result: 8.66 },
  { category: "Beweglichkeit", test: "Gewandtheit", name: "DFB-40", result: 8.77 },
  { category: "Beweglichkeit", test: "Gewandtheit", name: "DFB-30", result: 8.90 },
  { category: "Beweglichkeit", test: "Gewandtheit", name: "DFB-20", result: 9.07 },
  { category: "Beweglichkeit", test: "Gewandtheit", name: "DFB-10", result: 9.33 },
  { category: "Beweglichkeit", test: "Gewandtheit", name: "DFB-3", result: 9.66 },
  
  // Dribbling data
  { category: "Technik", test: "Dribbling", name: "Alex", result: 10.00 },
  { category: "Technik", test: "Dribbling", name: "Finley", result: 10.27 },
  { category: "Technik", test: "Dribbling", name: "Bent", result: 10.28 },
  { category: "Technik", test: "Dribbling", name: "DFB-97", result: 10.43 },
  { category: "Technik", test: "Dribbling", name: "DFB-90", result: 10.84 },
  { category: "Technik", test: "Dribbling", name: "DFB-80", result: 11.16 },
  { category: "Technik", test: "Dribbling", name: "DFB-70", result: 11.44 },
  { category: "Technik", test: "Dribbling", name: "DFB-60", result: 11.68 },
  { category: "Technik", test: "Dribbling", name: "DFB-50", result: 11.90 },
  { category: "Technik", test: "Dribbling", name: "DFB-40", result: 12.15 },
  { category: "Technik", test: "Dribbling", name: "DFB-30", result: 12.50 },
  { category: "Technik", test: "Dribbling", name: "DFB-20", result: 12.84 },
  { category: "Technik", test: "Dribbling", name: "DFB-10", result: 13.42 },
  { category: "Technik", test: "Dribbling", name: "DFB-3", result: 14.37 },
  
  // Ballkontrolle data
  { category: "Technik", test: "Ballkontrolle", name: "Bent", result: 8.95 },
  { category: "Technik", test: "Ballkontrolle", name: "DFB-97", result: 9.00 },
  { category: "Technik", test: "Ballkontrolle", name: "DFB-90", result: 9.66 },
  { category: "Technik", test: "Ballkontrolle", name: "DFB-80", result: 10.18 },
  { category: "Technik", test: "Ballkontrolle", name: "DFB-70", result: 10.59 },
  { category: "Technik", test: "Ballkontrolle", name: "Finley", result: 10.82 },
  { category: "Technik", test: "Ballkontrolle", name: "DFB-60", result: 10.99 },
  { category: "Technik", test: "Ballkontrolle", name: "DFB-50", result: 11.36 },
  { category: "Technik", test: "Ballkontrolle", name: "DFB-40", result: 11.78 },
  { category: "Technik", test: "Ballkontrolle", name: "DFB-30", result: 12.28 },
  { category: "Technik", test: "Ballkontrolle", name: "DFB-20", result: 12.86 },
  { category: "Technik", test: "Ballkontrolle", name: "DFB-10", result: 13.81 },
  { category: "Technik", test: "Ballkontrolle", name: "DFB-3", result: 15.29 },
  
  // Balljonglieren data
  { category: "Technik", test: "Balljonglieren", name: "DFB-97", result: 6.00 },
  { category: "Technik", test: "Balljonglieren", name: "Bent", result: 3.00 },
  { category: "Technik", test: "Balljonglieren", name: "DFB-90", result: 3.00 },
  { category: "Technik", test: "Balljonglieren", name: "DFB-80", result: 2.00 },
  { category: "Technik", test: "Balljonglieren", name: "DFB", result: 1.00 },
  { category: "Technik", test: "Balljonglieren", name: "Finley", result: 0.00 },
];

// Helper function to get results for a specific test
export function getTestResults(testName: string): TestResult[] {
  return allTestResults.filter(result => result.test === testName);
}

// Helper function to get unique test names
export function getUniqueTests(): string[] {
  const tests = new Set<string>();
  allTestResults.forEach(result => tests.add(result.test));
  return Array.from(tests);
}

// Helper function to get category for a test
export function getCategoryForTest(testName: string): string {
  const result = allTestResults.find(result => result.test === testName);
  return result ? result.category : "";
}

// Helper function to get display names
export function getTestDisplayInfo(testName: string): { title: string, subtitle: string, unit: string } {
  switch (testName) {
    case "10m Sprint":
    case "20m Sprint":
      return {
        title: `${testName} Rankings`,
        subtitle: "Speed test rankings",
        unit: "s"
      };
    case "Gewandtheit":
      return {
        title: "Gewandtheit Rankings",
        subtitle: "Agility test rankings",
        unit: "s"
      };
    case "Dribbling":
      return {
        title: "Dribbling Rankings",
        subtitle: "Technical skills rankings",
        unit: "s"
      };
    case "Ballkontrolle":
      return {
        title: "Ballkontrolle Rankings",
        subtitle: "Ball control rankings",
        unit: "s"
      };
    case "Balljonglieren":
      return {
        title: "Balljonglieren Rankings",
        subtitle: "Juggling skills rankings",
        unit: "count"
      };
    default:
      return {
        title: `${testName} Rankings`,
        subtitle: "Test rankings",
        unit: ""
      };
  }
} 