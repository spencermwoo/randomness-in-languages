import argparse

from stats import analysis_all
from graph import plot_all_multi, plot_all_individual

analysis_all()

# languages = get_languages()
# print(languages)

# options = get_options()
# print(options)

# py analysis.py --file ../outputs/go_10_1000000000
# if __name__ == '__main__':
# 	parser = argparse.ArgumentParser(description='argparse')
# 	parser._action_groups.pop()

# 	required = parser.add_argument_group('required arguments')
# 	required.add_argument('--file', type=argparse.FileType('r'), required=True)

# 	args = parser.parse_args()

# 	# print(dir(args.filename))

# 	analysis(args.file)