import statistics as st
import heapq
from sklearn import preprocessing

from util import read_output_files_and_perform, perform_probability_per_language, write_to_file

def calculate_standard_deviation(language, data, sample_size):
	# if language == 'expected': 
	# 	return (0)

	mean = len(data) / sample_size
	
	variance = st.pvariance(data, mean)
	std = variance ** (1/2)

	# zscore = map(lambda x: (x-mean)/std, data)

	return std

def analysis_one(languages, numbers, trials):
	resHeap = []
	heapq.heapify(resHeap)

	for language, filename, x, y in perform_probability_per_language(languages, numbers, trials):
		if language == 'expected': continue
		std = calculate_standard_deviation(language, y, trials)
		heapq.heappush(resHeap, (std, filename))

	# split by trial, however variance is already split
	return [heapq.heappop(resHeap) for i in range(len(resHeap))]

def write_analysis(analysisList):
	for trialList in analysisList:
		d = []
		numbers, trials = '', ''
		for i, analysis in enumerate(trialList):

			language, numbers, trials = analysis[1].split("_")

			d.append(f'{language}:{analysis[0]}')

		write_to_file(f'graphs/multi_{numbers}_{trials}_data', '\n'.join(d))

def normalize_group(analysisList):
	return preprocessing.minmax_scale(analysisList, feature_range=(analysisList[0], analysisList[-1]))

def perc(num):
	return 0

def analysis_all():
	analysisList = read_output_files_and_perform(analysis_one)

	return analysisList