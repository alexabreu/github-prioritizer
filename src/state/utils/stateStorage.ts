export const saveState = (state: State) => {
  try {
    localStorage.setItem('state', JSON.stringify(state));
  } catch {
    console.warn('Unable to save state to local storage.');
  }
}

export const loadState = (): State | undefined => {
  try {
    const serializedState = localStorage.getItem('state');

    if (!serializedState) { return undefined; }
    
    return JSON.parse(serializedState);
  } catch {
    return undefined;
  }
}