export const useFeedback = () => {
	const getFeedbacks = async (): Promise<unknown> => {
		return useHttp('/api/feedbacks').then((val) => {
			return val.data.value;
		});
	};

	return {
		getFeedbacks,
	};
};
