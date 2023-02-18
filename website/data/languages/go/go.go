package main

import (
	"strings"
	"fmt"
	"math/rand"
	"time"
	"os"
)

func main() {
	numbers := 10
	trials := 1000000

	prng(numbers, trials)
}

func prng(numbers int, trials int) {

	// initialize frequency
	m := make(map[int]int)
	
	seed := rand.NewSource(time.Now().UnixNano())
	r := rand.New(seed)
	
	var sb strings.Builder

	// frequency
	for i := 0; i < trials; i++ {
		m[r.Intn(numbers)] += 1
	}

	for n := 0; n < numbers; n++ {
		percentage := float64(m[n]) / float64(trials)
		sb.WriteString(fmt.Sprintf("%d:%f\n",n,percentage))
	}

	filename := fmt.Sprintf("go_%d_%d",numbers,trials)

	write(filename, sb.String())
}

func write(filename, s string) {
	f, err := os.Create(fmt.Sprintf("../data/%s", filename))
	check(err)
	defer f.Close()

	f.WriteString(s)
}

func check(e error) {
	if e != nil {
		panic(e)
	}
}