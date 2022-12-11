import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Random;

public class Main {
  public static void main(String[] args) {
    // Set the number of random numbers to generate and the upper bound for the numbers
    int N = 10;
    int X = 100;

    // Generate N random numbers between 1 and X
    Random random = new Random();
    int[] numbers = new int[N];
    for (int i = 0; i < N; i++) {
      numbers[i] = random.nextInt(X) + 1;
    }

    // Calculate the probability of each number
    double total = numbers.length;
    double[] probabilities = new double[N];
    for (int i = 0; i < N; i++) {
      probabilities[i] = 0;
      for (int j = 0; j < N; j++) {
        if (numbers[j] == numbers[i]) {
          probabilities[i]++;
        }
      }
      probabilities[i] /= total;
    }

    // Generate a file name based on the values of N and X
    String fileName = String.format("java_%d_%d.csv", N, X);

    // Create the "outputs" directory if it does not exist
    File dir = new File("outputs");
    if (!dir.exists()) {
      dir.mkdir();
    }

    // Write the probabilities to a file in the "outputs" directory
    try (FileWriter writer = new FileWriter(new File(dir, fileName))) {
      for (int i = 0; i < N; i++) {
        writer.write(String.format("%d,%f\n", numbers[i], probabilities[i]));
      }
    } catch (IOException e) {
      e.printStackTrace();
    }
  }
}
