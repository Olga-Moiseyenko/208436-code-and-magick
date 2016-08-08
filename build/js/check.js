function getMessage(a, b) {
  var ms;
  if(typeof(a)=='boolean')
  {
    if(a==true)
    {
      ms= 'Я попал в '+ b;
    } else {
      ms= 'Я никуда не попал';
    }
  } else
  if (typeof(a)=='number')
  {
    ms='Я прыгнул на ' +a*100+' сантиметров';
  }
  else
  if ((typeof(a)=='object') && (typeof(b)!='object'))
  {
    var numberOfSteps=0;
    for(var i = 0; i < a.length; i++){
      numberOfSteps=numberOfSteps+a[i];
    }
    ms='Я прошёл '+numberOfSteps+' шагов';
  }
  else
  if ((typeof(a)=='object') && (typeof(b)=='object'))
  {
    var distancePath=0;
    for(var i = 0; i < a.length; i++)
    {
      distancePath=distancePath+a[i]*b[i];
    }
    ms='Я прошёл '+distancePath+' метров';

  }
  return ms;
}
