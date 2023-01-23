% Set the number of random numbers to generate and the upper bound for the numbers
:- dynamic n/1, x/1.
n(10).
x(100).

% Generate N random numbers between 1 and X
random_numbers(Numbers) :-
  findall(Number, (between(1, x, Number), random(1, 100, R), R =< n), Numbers).

% Calculate the probability of each number
probabilities(Numbers, Probabilities) :-
  length(Numbers, Total),
  sort(Numbers, Sorted),
  group_pairs_by_key(Sorted, Grouped),
  maplist(probability, Grouped, Probabilities).

probability((Number, Occurrences), Probability) :-
  length(Occurrences, Count),
  Probability is Count / Total.

% Generate a file name based on the values of N and X
file_name(Name) :-
  n(N),
  x(X),
  format(atom(Name), "prolog_~w_~w.csv", [N, X]).

% Create the "outputs" directory if it does not exist
:- make.

% Write the probabilities to a file in the "outputs" directory
make :-
  file_name(File),
  setup_call_cleanup(
    open(File, write, Stream),
    (
      random_numbers(Numbers),
      probabilities(Numbers, Probabilities),
      maplist(write_probability(Stream), Numbers, Probabilities)
    ),
    close(Stream)
  ).

write_probability(Stream, Number, Probability) :-
  format(Stream,
