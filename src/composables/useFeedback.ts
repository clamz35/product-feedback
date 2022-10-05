export const useFeedback = () => {
  const getFeedbacks = async (): Promise<any> => {
    return useHttp('/api/feedbacks').then((val) => {
      console.log({ data: val.data.value });
      return val.data.value;
    });
  };

  return {
    getFeedbacks,
  };
};
