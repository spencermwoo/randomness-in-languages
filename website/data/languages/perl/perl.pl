#!/usr/bin/env perl

use strict;
use warnings;
use autodie;

# Set the number of random numbers to generate and the upper bound for the numbers
my $n = 10;
my $x = 100;

# Generate N random numbers between 1 and X
my @numbers = map { int(rand($x)) + 1 } (1..$n);

# Calculate the probability of each number
my %counts;
$counts{$_}++ for @numbers;
my %probabilities = map { $_ => $counts{$_} / $n } keys %counts;

# Generate a file name based on the values of N and X
my $file_name = "perl_$n\_$x.csv";

# Create the "outputs" directory if it does not exist
mkdir "outputs";

# Write the probabilities to a file in the "outputs" directory
open my $fh, ">", "outputs/$file_name";
for my $number (keys %probabilities) {
    print $fh "$number,$probabilities{$number}\n";
}
