#include <stdio.h>
int main(int argc, char *argv[])
{
    int N;
    int somma = 0;
    do
    {
        printf("Inserire un numero maggiore di 0 \n");
        scanf("%d", &N);
    } while (N <= 0);
    if (N % 2 == 0)
    {
        N--; // lo rendo dispari
    }
    do
    {
        somma += N;
        N--;
    } while (N > 0);
    printf("La somma è %d \n", somma);
    return 0;
}