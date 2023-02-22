import os
import shutil

verbose = True

BASE_DIR_FOR_DATA = '../website/data'

def get_rel_language_path(language):
	return f'{BASE_DIR_FOR_DATA}/languages/{language}/'

def get_rel_results_path(nums, trials):
	TRIAL_TYPES = [(10, 1000000), (1000, 1000000), (10, 1000000000)]
	TRIAL_DIRS = ['trial-one', 'trial-two', 'trial-three']

	for i, (n, t) in enumerate(TRIAL_TYPES):
		if n==nums and t==trials:
			return f'{BASE_DIR_FOR_DATA}/results/{TRIAL_DIRS[i]}/'
			
	# match (nums, trials):
	# 	case TRIALS[0]:
	# 		return f'{BASE_DIR_FOR_DATA}/results/trial-one'
	# 	case TRIALS[1]:
	# 		return f'{BASE_DIR_FOR_DATA}/results/trial-two'
	# 	case TRIALS[2]:
	# 		return f'{BASE_DIR_FOR_DATA}/results/trial-three'

def _copy_file(src, dst):
	if verbose: print(f'Copied {src} to {dst}')

	shutil.copyfile(src, dst)

def language_outputs():
	ls = os.listdir()

	try:
		for filename in ls:
			if '.' in filename: continue
			if '_' not in filename: continue

			language = filename.split("_")[0]

			if language == 'expected': continue

			_copy_file(filename, f'{get_rel_language_path(language)}{filename}')
	except:
		print("err")

def analysis_graphs():
	os.chdir('graphs')
	ls = os.listdir()

	try:
		for filename in ls:
			if 'data' not in filename and '.png' not in filename: continue
			if '_' not in filename: continue

			language, nums, trials, *others = filename.split("_")

			if language == 'expected': continue

			if language == 'analysis' or language == 'multi':
				nums, trials = int(nums), int(trials.split(".")[0])
				_copy_file(filename, f'../{get_rel_results_path(nums, trials)}{filename}')
			else:
				_copy_file(filename, f'../{get_rel_language_path(language)}{filename}')
	except:
		print("err")


language_outputs()
analysis_graphs()