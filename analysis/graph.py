import matplotlib.pyplot as plt

from util import read_output_files_and_perform, perform_probability_per_language, parse

# this plots multiple result files
def multiplot(languages, numbers, trials, *args):
	# for r in perform_per_language(calculate_probability, languages, numbers=numbers, trials=trials):
	# 	print(r)
		
	for (language, filename, x, y) in perform_probability_per_language(languages, numbers, trials):
		_plot(x, y, language)

	_plot_graph('number', 'probability', f'multi_{numbers}_{trials}', True)

def singleplot_all(languages, numbers, trials, include_expected):
	for language in languages:
		singleplot(language, numbers, trials, include_expected)

# this plots a single result file
def singleplot(language, numbers, trials, include_expected=False):
	x, y = [], []

	save_language=language
	if include_expected:
		language='expected'

	filename = f'{language}_{numbers}_{trials}'
	with open(filename) as file:
		for line in file:
			n, probability = parse(line)

			x.append(n)
			y.append(probability)
			# deviations.append(calculate_deviation(n, probability, expected))

	_plot(x, y, language)

	if include_expected:
		singleplot(save_language, numbers, trials)
	else:
		_plot_graph('number', 'probability', f'{language}_{numbers}_{trials}', True)

# https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html
def _plot(x, y, label):
	plt.plot(x, y, label=label)

def _bar(x, y):
	plt.bar(x, y, width=0.4, label=y)

def _plot_graph(x_axis, y_axis, title, save=False):
	plt.legend(loc='best')

	plt.xlabel(x_axis)
	plt.ylabel(y_axis)

	plt.title(title)

	if save:
		plt.savefig(f'graphs/{title}.png', bbox_inches='tight')

	plt.clf()

# ====

def plot_individuals(include_expected=False):
	read_output_files_and_perform(singleplot_all, include_expected)

def plot_multis():
	read_output_files_and_perform(multiplot)

def plot_analysis(analysisList):
	numbers, trials = None, None
	for trialList in analysisList:

		# trialList = normalize_group(trialList)
		for i, analysis in enumerate(trialList):
			std, filename = analysis

			language, numbers, trials = filename.split("_")

			# if i==0: plt.axis(ymin=std-perc(std))
			# elif i==len(trialList)-1: plt.axis(ymax=std+perc(std))

			_bar(language, std)
		_plot_graph('language', 'std', f'analysis_{numbers}_{trials}', True)

	return
