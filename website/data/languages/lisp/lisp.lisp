;; Set the number of random numbers to generate and the upper bound for the numbers
(defparameter *n* 10)
(defparameter *x* 100)

;; Generate N random numbers between 1 and X
(defun generate-random-numbers ()
  (loop repeat *n*
        collect (random *x*)))

;; Calculate the probability of each number
(defun calculate-probabilities (numbers)
  (let* ((counts (make-array *x* :initial-element 0))
         (total *n*))
    (dolist (number numbers)
      (incf (aref counts (1- number))))
    (loop for i from 1 to *x*
          collect (/ (aref counts i) total))))

;; Generate a file name based on the values of N and X
(defun file-name ()
  (format nil "lisp~d~d.csv" *n* *x*))

;; Create the "outputs" directory if it does not exist
(defun create-output-directory ()
  (unless (probe-file "outputs")
    (make-directory "outputs")))

;; Write the probabilities to a file in the "outputs" directory
(defun write-probabilities (probabilities)
  (with-open-file (stream (format nil "outputs/~A" (file-name)))
    (loop for i from 1 to *x*
          do
