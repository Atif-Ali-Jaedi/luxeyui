declare function debounce(func: () => void, wait: number): {
    (): void;
    cancel: () => void;
  };