;; sbcl --dynamic-space-size 2048 --script lisp.lisp
(defun main ()
  (let ((n 1000000000)
        (x 10))
    ;; Generate N random numbers between 1 and X
    (let ((numbers (loop repeat n collect (random x))))
      ;; Calculate the probability of each number
      (let ((probabilities (loop for i from 0 to x
                                 collect (cons i (/ (count i numbers) n)))))
        ;; Output probabilities to a file
        (let ((file-name (format nil "lisp_~A_~A" x n)))
          (with-open-file (out file-name
                               :direction :output
                               :if-exists :supersede)
            (loop for (number . probability) in probabilities
                  do (format out "~A:~,6f~%" number probability))))
        (format t "Probabilities written to file lisp_~A_~A~%" x n)))))

(main)
