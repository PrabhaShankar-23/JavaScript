let func(let a, let b) {
    if(b==0)
    return 0;
    if(b==1)
    return a;
    return a + func(a,b-1);
}

func (3,8);