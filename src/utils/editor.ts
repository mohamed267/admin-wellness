export const safingEditorOutput = (data: any) => {
  const defaultOutput = {
    blocks: [],
  };
  if (data?.blocks) {
    if (Array.isArray(data.blocks)) {
      return data;
    }

    return defaultOutput;
  }

  return defaultOutput;
};
