program GenerateRandomNumbers;

{$APPTYPE CONSOLE}

uses
  SysUtils, Classes;

// Set the number of random numbers to generate and the upper bound for the numbers
const
  N = 10;
  X = 100;

// Generate N random numbers between 1 and X
function GenerateNumbers: TArray<Integer>;
var
  i: Integer;
begin
  // Initialize the random number generator with a seed based on the current time
  Randomize;

  // Generate the random numbers and store them in the array
  SetLength(Result, N);
  for i := 0 to N - 1 do
    Result[i] := Random(X) + 1;
end;

// Calculate the probability of each number
function CalculateProbabilities(const numbers: TArray<Integer>): TArray<Double>;
var
  counts: TArray<Integer>;
  i: Integer;
  total: Integer;
begin
  // Initialize the array of counts
  SetLength(counts, X);
  for i := 0 to X - 1 do
    counts[i] := 0;

  // Calculate the number of occurrences of each number
  total := N;
  for i := 0 to N - 1 do
    Inc(counts[numbers[i] - 1]);

  // Calculate the probability of each number
  SetLength(Result, X);
  for i := 0 to X - 1 do
    Result[i] := counts[i] / total;
end;

// Generate a file name based on the values of N and X
function GenerateFileName: string;
begin
  Result := Format('delphi%d%d.csv', [N, X]);
end;

// Create the "outputs" directory if it does not exist
procedure CreateOutputDirectory;
begin
  if not DirectoryExists('outputs') then
    CreateDir('outputs');
end;

// Write the probabilities to a file in the "outputs" directory
procedure WriteProbabilities(const probabilities: TArray<Double>);
var
  fileName: string;
  file: TextFile;
  i: Integer;
begin
  fileName := GenerateFileName;
  AssignFile(file, 'outputs\' + fileName);
  try
    Rewrite(file);
    for i := 0 to X - 1 do
      WriteLn(file, i + 1, ',', probabilities[i]);
  finally
