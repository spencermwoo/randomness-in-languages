import random
import time
import argparse

def prng(numbers, trials):
	frequency = [0] * numbers;
	probability = [0.0] * numbers;


	start_time = time.time()
	
	for x in range(0, trials):
		r_number = random.randint(0, numbers-1);
		frequency[r_number] += 1;

	output = "";
	for y in range(0, numbers):
		if(frequency[y] == 0):
			output += f'{y} : 0\n';
		else:
			probability[y] = frequency[y] / float (trials);
			output += f'{y} : {probability[y]}\n';


	duration = time.time() - start_time

	filename = f'python_{numbers}_{trials}.txt';

	with open(filename, 'w') as f:
		f.write(output);

	print("--- %s seconds ---" % duration);
	return None;

if __name__ == '__main__':
	parser = argparse.ArgumentParser(description='argparse')
	parser._action_groups.pop()

	required = parser.add_argument_group('required arguments')
	required.add_argument('--range', type=int, default=1000, required=True)
	required.add_argument('--trials', type=int, default=1000000, required=True)

	args = parser.parse_args()

	numbers = args.range
	trials = args.trials

	prng(numbers, trials)