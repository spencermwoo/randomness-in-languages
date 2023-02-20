use rand::distributions::{Distribution, Uniform};
use std::fs::File;
use std::io::Write;

fn main() {
    let n = 1000000000;
    let x = 10;

    let mut rng = rand::thread_rng();
    let range = Uniform::from(1..=x);
    let mut counts = vec![0; x];

    // // Generate N random numbers between 1 and X
    // let numbers: Vec<usize> = (0..N).map(|_| thread_rng().gen_range(1, X + 1)).collect();

    // // Calculate the probability of each number
    // let mut counts = HashMap::new();
    // for number in &numbers {
    //     *counts.entry(number).or_insert(0) += 1;
    // }

    // let total = numbers.len();
    // let probabilities = numbers
    //     .iter()
    //     .map(|number| (number, *counts.get(number).unwrap() as f64 / total as f64))
    //     .collect::<Vec<_>>();

    for _ in 0..n {
        let number = range.sample(&mut rng);
        counts[number - 1] += 1;
    }

    let mut file = File::create(format!("rust_{}_{}", x, n)).unwrap();

    for i in 0..x {
        let probability = counts[i] as f64 / n as f64;
        writeln!(file, "{}: {}", i + 1, probability).unwrap();
    }
}
