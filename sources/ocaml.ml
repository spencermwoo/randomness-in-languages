(* Set the number of random numbers to generate and the upper bound for the numbers *)
let n = 10;;
let x = 100;;

(* Generate N random numbers between 1 and X *)
let numbers = List.init n (fun _ -> Random.int x + 1);;

(* Calculate the probability of each number *)
let probabilities =
  let total = List.length numbers in
  let counts = List.fold_left (fun m n -> IntMap.add n (1 + (try IntMap.find n m with Not_found -> 0)) m) IntMap.empty numbers in
  List.map (fun n -> float (IntMap.find n counts) /. float total) numbers;;

(* Generate a file name based on the values of N and X *)
let file_name = "ocaml_" ^ (string_of_int n) ^ "_" ^ (string_of_int x) ^ ".csv";;

(* Create the "outputs" directory if it does not exist *)
let () =
  try
    Unix.mkdir "outputs" 0o755
  with
    Unix.Unix_error (Unix.EEXIST, _, _) -> ()
;;

(* Write the probabilities to a file in the "outputs" directory *)
let () =
  let file = open_out ("outputs
