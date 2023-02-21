(defn print-output [data]
  (doseq [[number probability] data]
    (println (str number ":" (format "%.9f" probability)))))

(defn generate-random-numbers [n x]
  (let [numbers (repeatedly n #(rand-int x))]
    (frequencies numbers)))

(defn calculate-probabilities [counts n]
  (into {} (for [[number count] counts]
             [number (float(/ count n))])))

(let [n 1000000
      x 1000
      counts (generate-random-numbers n x)
      probabilities (calculate-probabilities counts n)]
  (print-output probabilities))
