use rand::distributions::{Distribution, Uniform};
use std::fs::File;
use std::io::Write;

fn main() {
    let n = 1000000000;
    let x = 10;

    let mut rng = rand::thread_rng();
    let range = Uniform::from(1..=x);
    let mut counts = vec![0; x];

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
