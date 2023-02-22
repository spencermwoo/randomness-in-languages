let generate_random_numbers n x =
  let numbers = Array.make (x+1) 0 in
  for i=1 to n do
    let r = Random.int x + 1 in
    numbers.(r) <- numbers.(r) + 1
  done;
  numbers

let calculate_probabilities numbers n =
  let probabilities = Array.make (Array.length numbers) 0.0 in
  for i=1 to (Array.length numbers - 1) do
    probabilities.(i) <- float_of_int numbers.(i) /. float_of_int n
  done;
  probabilities

let write_probabilities_to_file probabilities n x =
  let filename = Printf.sprintf "ocaml_%d_%d" x n in
  let oc = open_out filename in
  for i=1 to (Array.length probabilities - 1) do
    Printf.fprintf oc "%d: %.6f\n" i probabilities.(i)
  done;
  close_out oc;
  Printf.printf "Probabilities written to file %s.\n" filename

let () =
  let n = 1000000000 in
  let x = 10 in
  Random.self_init ();
  let numbers = generate_random_numbers n x in
  let probabilities = calculate_probabilities numbers n in
  write_probabilities_to_file probabilities n x
