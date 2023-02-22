import matplotlib.pyplot as plt

from util import read_output_files_and_perform, perform_probability_per_language, parse
from stats import normalize_group, perc

# this plots multiple result files
def multiplot(languages, numbers, trials, *args):
	# for r in perform_per_language(calculate_probability, languages, numbers=numbers, trials=trials):
	# 	print(r)
		
	for (language, filename, x, y) in perform_probability_per_language(languages, numbers, trials):
		_plot(x, y, language)

	fewer = False
	if numbers == 1000:
		fewer = True
	_plot_graph('number', 'probability', f'multi_{numbers}_{trials}', True, fewer)

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
			if ":" in line:
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

def _plot_graph(x_axis, y_axis, title, save=False, fewer=False):
	plt.legend(loc='best')

	# plt.margins(0.1)
	# plt.figure(figsize=(20,5))

	# plt.figure(figsize=[12.8, 9.6])
	# if fewer:
	# 	plt.locator_params(axis='x', nbins=10)
	# 	plt.locator_params(axis='y', nbins=10)

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
	plt.figure(figsize=(25.6, 19.2))
	read_output_files_and_perform(multiplot)

def plot_analysis(analysisList):
	plt.figure(figsize=(25.6, 19.2))
	numbers, trials = None, None
	for trialList in analysisList:

		# trialList = normalize_group(trialList)
		# ymin = 0
		# ymax = 0
		for i, analysis in enumerate(trialList):
			std, filename = analysis

			language, numbers, trials = filename.split("_")

			if i==0: ymin = plt.ylim(ymin=max(std, 0))
			elif i==len(trialList)-1: plt.ylim(ymax=std)

			# TODO: each language should use the same color in all graphs
			_bar(language, std)

		# TODO: why y-axis has negative scale (???)
		# plt.axis(xmin=0, ymin=ymin, ymax=ymax)
		# print(plt.axis())
		_plot_graph('language', 'std', f'analysis_{numbers}_{trials}', True)

	return
