// for Blog button
document.getElementById('Blog').addEventListener('click',function(){
    window.location.href = "blog.html";
})





// A custom call Function
function chnages(id1,id2){
    const donation =document.getElementById(id1);
    donation.className = '';
    donation.classList.add('btn', 'btn-outline', 'border-[#B4F461]', 'px-5', 'font-medium', 'text-stone-500')
    const y = document.getElementById(id2);
    y.className = '';
    y.classList.add('btn', 'btn-primary','bg-[#B4F461]', 'px-5', 'text-black', 'font-bold', 'border-none', 'hover:bg-green-200');


}

//  another call back function
// ------------------id used
// main-taka
// btn-1
// change-taka
// input-1
function donation(id1,id2,id3,id4,id5){

    const main_taka = document.getElementById(id1).innerText;
    const x = parseFloat(main_taka);
    const chnage_taka = document.getElementById(id3).innerText;
    const z = parseFloat(chnage_taka);
    const input_value = document.getElementById(id2).value;
    const taka_add_koro = document.getElementById(id4);
    const place = document.getElementById(id5).innerText;
    if( isNaN(input_value)){
        alert("You can not give negative or any letters as Dontaion");
    }else{
        const y = parseFloat(input_value);
        let sum2 = (x-y);
        let sum1 = (z+y);
        
        document.getElementById(id1).innerText = sum2;
        document.getElementById(id3).innerText = sum1;
        // aikhane taka add er part
        const currentDate = new Date();
        const formattedTime = currentDate.toString();
        taka_add_koro.innerHTML += `
    <div class="border border-stone-200 rounded-[18px] px-4 mt-4 mb-4">
        <p class="text-lg text-black font-bold">You have successfully donated ${y} Taka. ${place}</p>
        <p class="text-xl font-bold text-stone-300">Donation made at: ${formattedTime}</p>
    </div>
`;
      // end
        document.getElementById('my_modal_1').showModal();
    }
}
// History btn er keramoti
function history(id1,id2){
    const x = document.getElementById(id1);
    const y = document.getElementById(id2);
    x.classList.add('hidden');
    y.classList.remove('hidden');



}



