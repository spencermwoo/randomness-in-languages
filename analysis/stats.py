import statistics as st
import heapq

from util import read_output_files_and_perform, perform_probability_per_language

def calculate_standard_deviation(language, data, sample_size):
	if language == 'expected': 
		return (0)

	mean = len(data) / sample_size
	
	variance = st.pvariance(data, mean)
	std = variance ** (1/2)

	# zscore = map(lambda x: (x-mean)/std, data)

	return std

def analysis_one(languages, numbers, trials):
	resHeap = []
	heapq.heapify(resHeap)

	for language, filename, x, y in perform_probability_per_language(languages, numbers, trials):
		std = calculate_standard_deviation(language, y, trials)
		heapq.heappush(resHeap, (std, filename))

	# split by trial, however variance is already split
	return [heapq.heappop(resHeap) for i in range(len(resHeap))]

def analysis_all():
	analysisList = read_output_files_and_perform(analysis_one)

	return analysisList