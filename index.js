function triangular_series( n)
{
    let i, j = 1, k = 1;
 
    // For each iteration increase j by 1
    // and add it into k
    for (i = 1; i <= n; i++)
    {
        console.log(k+" ");
        j = j + 1; // Increasing j by 1
        k = k + j; // Add value of j into k and update k
    }
}
triangular_series(100);