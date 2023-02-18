import java.util.*;
import java.io.*;
import java.text.DecimalFormat;

public class java {

	public static void main(String[] args) {
		int range = 0;
		int trials = 0;
		
		try {
			range = Integer.parseInt(args[0]);
			trials = Integer.parseInt(args[1]);

			prng(range, trials);
		} catch (Exception e) {
			System.err.println("ERROR: Invalid Arguments");
			System.err.println("Expecting:\n\tjava java <range> <trials>");
		}
	}

	static void prng(int range, int trials) {
		long start_time = System.currentTimeMillis();

		double frequency[] = new double[range];
		double probability[] = new double[range];
		
		Random random = new Random();
		for (int i = 0; i < trials; i++) {
			int r_number = random.nextInt(range);
			frequency[r_number] += 1;
		}

		String output = "";
		for (int i = 0; i < range; i++) {
			if (frequency[i] == 0) {
				output += String.format("%d:0\n", i);
			} else {
				probability[i] = frequency[i] / trials;
				DecimalFormat df = new DecimalFormat("#.######");
				output += String.format("%d:%s\n", i, df.format(probability[i]));
			}
		}
		
		long end_time = System.currentTimeMillis();
		long duration = end_time - start_time;
		
		try {
			String filename = String.format("%s\\outputs\\java_%s_%s.txt", System.getProperty("user.dir"), range, trials);

			FileWriter fw = new FileWriter(filename);
			fw.write(output);
			fw.close();
		} catch (Exception e) {
			System.err.println(e);
		}
		
		System.out.println(String.format("--- %f seconds ---", (duration * 0.001)));
	}
}
