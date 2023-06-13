#include <iostream>
#include<vector>
using namespace std;

int main() {
    int t,x, reversed = 0, rem, original, count=0;
    while(t--){
        int n; 
        vector<int> a(n);
        cin>>n;
        for(int i=0;i<n;i++){
            cin>>a[i];
        }
        for(int i=0;i<n;i++){
        for(int j=1;j<n;j++){
            x=a[i]^a[j];
           
        }
    }     original = x;
            while (x != 0) {
                rem = x % 10;
                reversed = reversed * 10 + rem;
                x /= 10;
            }
            if (original == reversed){
                count++;
            }
        
        cout<<count<<endl;
    }



	return 0;
}