.section __TEXT,__text
.globl _start

_start:
    movl $0, %eax          # Set up counter
    movl $0x64, %ebx          # Set up loop count
    movl $0xA, %ecx          # Set up max value
    leaq numbers(%rip), %rdi     # Set up array address using RIP-relative addressing
    
init:
    movl $0, %edx          # Generate a random number between 0 and X-1
    movl $0x7fffffff, %eax
    xor %rdx, %rdx
    div %ecx
    inc %edx
    
    movl %edx, (%rdi,%rax,4)     # Store the number in the array
    
    inc %eax                # Increment the counter
    cmp %ebx, %eax          # Compare the counter to the loop count
    jne init                # Loop until counter == loop count
    
    movq $1, %rax           # Open a file for writing
    leaq filename(%rip), %rdi
    movq $0x0202, %rsi
    movq $0x1a4, %rdx
    syscall
    
    movq %rax, %rdi         # Write the output to the file
    leaq numbers(%rip), %rsi
    movq $4*0x64, %rdx
    movq $0x0201, %rax
    syscall
    
    movq $0, %rdi           # Exit
    movq $0x2000001, %rax
    syscall
    
.section __DATA,__data
numbers:
    .space 0x64*4
    
.section __DATA,__const
filename:
    .asciz "assembly_X_N"