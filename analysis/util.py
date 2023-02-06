import os

def read_output_files_and_perform(func, *args):
	os.chdir('../outputs/')
	languages, options = parse_output_filenames()
	
	for option in options:
		numbers = option[0]
		trials = option[1]
		func(languages, numbers, trials, *args)

def perform_per_language(languages, numbers, trials):
	for language in languages:
		x, y = [], []
		filename = f'{language}_{numbers}_{trials}'
		with open(filename) as file:
			for line in file:
				n, probability = parse(line)

				x.append(n)
				y.append(probability)

		yield (language, filename, x,y)

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