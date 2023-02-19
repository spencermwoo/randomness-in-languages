import os
import itertools

def read_output_files_and_perform(func, *args):
	os.chdir('../outputs/')
	languages, options = parse_output_filenames()
	
	r = []
	for i, option in enumerate(options):
		numbers = option[0]
		trials = option[1]
		res = func(languages, numbers, trials, *args)

		r.append(res)

	return r

# def calculate_probability(filename):
# 	with open(filename) as file:
# 		x, y = [], []
# 		for line in file:
# 			n, probability = parse(line)

# 			x.append(n)
# 			y.append(probability)

# 			yield (filename, x,y)

def perform_probability_per_language(languages, numbers, trials):
	for language in languages:
		filename = f'{language}_{numbers}_{trials}'

		with open(filename) as file:
			x, y = [], []
			for line in file:
				n, probability = parse(line)

				x.append(n)
				y.append(probability)

			yield (language, filename, x,y)

# def perform_per_language(func, languages, **kwargs):
# 	for language in languages:
		# yield from func(language, **kwargs))

# def calculate_probability(language, numbers, trials):
# 	x, y = [], []
# 	filename = f'{language}_{numbers}_{trials}'
# 	with open(filename) as file:
# 		for line in file:
# 			n, probability = parse(line)

# 			x.append(n)
# 			y.append(probability)

# 			yield (language, filename, x,y)

def parse(line):
	s = line.split(":")
	
	n = float(s[0].strip())
	probability = float(s[1].strip())

	return [n + 1, probability]

def parse_output_filenames():
	'''
	 Expecting to be within /outputs/
	'''
	ls = os.listdir()

	languages = set()
	options = set()
	for file in ls:
		if '.' in file: continue

		if "_" in file:
			fileparts = file.split("_")
			
			language = fileparts[0]
			numbers = int(fileparts[1])
			trials = int(fileparts[2])

			option_tuple = (numbers, trials)

			languages.add(language)
			options.add(option_tuple)

	return (languages, options)