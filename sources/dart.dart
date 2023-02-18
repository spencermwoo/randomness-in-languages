import 'dart:io';
import 'dart:math';

void main() {
  // Set the number of random numbers to generate and the upper bound for the numbers
  final n = 10;
  final x = 100;

  // Generate N random numbers between 1 and X
  final random = Random();
  final numbers = List.generate(n, (_) => random.nextInt(x) + 1);

  // Calculate the probability of each number
  final counts = Map<int, int>();
  numbers.forEach((number) => counts[number] = (counts[number] ?? 0) + 1);
  final total = numbers.length;
  final probabilities = counts.entries
      .map((e) => MapEntry(e.key, e.value / total))
      .toList();

  // Generate a file name based on the values of N and X
  final fileName = 'dart_$n_$x.csv';

  // Create the "outputs" directory if it does not exist
  Directory('outputs').create(recursive: true);

  // Write the probabilities to a file in the "outputs" directory
  final file = File('outputs/$fileName');
  file.writeAsStringSync(probabilities
      .map((e) => '${e.key},${e.value}\n')
      .join());
}
