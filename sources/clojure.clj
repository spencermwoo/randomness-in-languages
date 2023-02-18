;; Set the number of random numbers to generate and the upper bound for the numbers
(def N 10)
(def X 100)

;; Generate N random numbers between 1 and X
(defn generate-numbers []
    (let [random (rand-int X)]
        (repeatedly N #(+ random 1))))

;; Calculate the probability of each number
(defn calculate-probabilities [numbers]
    (map #(/ (count (filter #{X} numbers)) N) (range 1 (inc X))))

;; Generate a file name based on the values of N and X
(defn generate-file-name []
    (str "clojure" N X ".csv"))

;; Create the "outputs" directory if it does not exist
(defn create-output-directory []
    (if-not (clojure.java.io/file "outputs")
        (clojure.java.io/file "outputs")))

;; Write the probabilities to a file in the "outputs" directory
(defn write-probabilities [probabilities]
    (with-open [writer (clojure.java.io/writer (str "outputs/" (generate-file-name)))]
        (doseq [[probability i] (map-indexed vector probabilities)]
            (write-line writer (str i "," probability)))))

;; Generate the numbers and calculate the probabilities
(let [numbers (generate-numbers)]
    (def probabilities (calculate-probabilities numbers))

;; Create the output directory and write the probabilities to a file
    (create-output-directory)
    (write-probabilities probabilities))
