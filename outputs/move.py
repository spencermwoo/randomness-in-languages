import os
import shutil

verbose = True

BASE_DIR_FOR_DATA = '../website/data'

def get_rel_language_path(language):
	return f'{BASE_DIR_FOR_DATA}/languages/{language}/'

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

			_copy_file(filename, get_rel_language_path(language) + filename)
	except:
		print("err")

def analysis_graphs():
	os.chdir('graphs')
	ls = os.listdir()


# language_outputs()
analysis_graphs()