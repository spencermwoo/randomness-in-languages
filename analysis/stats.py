import statistics as st
import heapq

from util import read_output_files_and_perform, parse

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
	for language in languages:
		x, y = [], []
		filename = f'{language}_{numbers}_{trials}'
		with open(filename) as file:
			for line in file:
				n, probability = parse(line)

				x.append(n)
				y.append(probability)

		std = calculate_standard_deviation(language, y, trials)
		heapq.heappush(resHeap, (std, filename))

	# split by trial, however variance is already split
	while resHeap:
		print(heapq.heappop(resHeap))

def analysis_all():
	read_output_files_and_perform(analysis_one)

# analysis_all()