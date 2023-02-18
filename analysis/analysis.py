import argparse

from stats import analysis_all
from graph import plot_multis, plot_individuals, plot_analysis

# Analyze statistics
# ====
analysis_all()

# Generate graphs
# ====
# plot_individuals(True)
# plot_multis()

# Graph Analysis
# ====
# plot_analysis()

# ===
# if __name__ == '__main__':
# 	parser = argparse.ArgumentParser(description='argparse')
# 	parser._action_groups.pop()

# 	required = parser.add_argument_group('required arguments')
# 	required.add_argument('--file', type=argparse.FileType('r'), required=True)

# 	args = parser.parse_args()

# 	# print(dir(args.filename))

# 	analysis(args.file)