import matplotlib.pyplot as plt

from util import read_output_files_and_perform, perform_per_language, parse

# this plots multiple result files
def multiplot(languages, numbers, trials):
	for language, filename, x, y in perform_per_language(languages, numbers, trials):
		_plot(x, y, language)

	_plot_graph('number', 'probability', f'{numbers}_{trials}', True)

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
		create_analysis(save_language, numbers, trials)
	else:
		_plot_graph('number', 'probability', f'{language}_{numbers}_{trials}', True)

# https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html
def _plot(x, y, label):
	plt.plot(x, y, label=label)

def _plot_graph(x_axis, y_axis, title, save=False):
	plt.legend(loc='best')

	plt.xlabel(x_axis)
	plt.ylabel(y_axis)

	plt.title(title)

	if save:
		plt.savefig(f'graphs/{title}.png', bbox_inches='tight')

	plt.clf()

def plot_one(language, number, trial):
	singleplot(language, numbers, trials)

	# multiplot(languages, numbers, trials)

def plot_individuals(include_expected=False):
	read_output_files_and_perform(create_analysis, include_expected)

def plot_multis():
	read_output_files_and_perform(multiplot)

def plot_analysis():
	return

# plot_one('go', 10, 1000000)
# plot_individuals(True)
# plot_multis()

