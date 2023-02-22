import argparse

from stats import analysis_all, write_analysis
from graph import plot_multis, plot_individuals, plot_analysis

# Generate Graphs
# ====
plot_individuals(True)
plot_multis()

# Graph Analysis
# ====
analysisList = analysis_all()
write_analysis(analysisList)
plot_analysis(analysisList)

# ===
# if __name__ == '__main__':
# 	parser = argparse.ArgumentParser(description='argparse')
# 	parser._action_groups.pop()

# 	required = parser.add_argument_group('required arguments')
# 	required.add_argument('--file', type=argparse.FileType('r'), required=True)

# 	args = parser.parse_args()

# 	# print(dir(args.filename))

# 	analysis(args.file)