use std::fs::{create_dir_all, File};
use std::io::Write;
use std::collections::HashMap;
use rand::{thread_rng, Rng};

// Set the number of random numbers to generate and the upper bound for the numbers
const N: usize = 10;
const X: usize = 100;

fn main() {
    // Generate N random numbers between 1 and X
    let numbers: Vec<usize> = (0..N).map(|_| thread_rng().gen_range(1, X + 1)).collect();

    // Calculate the probability of each number
    let mut counts = HashMap::new();
    for number in &numbers {
        *counts.entry(number).or_insert(0) += 1;
    }
    let total = numbers.len();
    let probabilities = numbers
        .iter()
        .map(|number| (number, *counts.get(number).unwrap() as f64 / total as f64))
        .collect::<Vec<_>>();

    // Generate a file name based
