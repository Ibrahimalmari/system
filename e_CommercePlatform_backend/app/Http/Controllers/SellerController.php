<?php

namespace App\Http\Controllers;

use App\Models\SellerMan;
use Illuminate\Support\Facades\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;

class SellerController extends Controller

{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index()
    {
         $seller = SellerMan::all();
         return response()->json([
            'status' => 200, 
             'seller' =>$seller,
            'message'=>'Registered Successfully',
        ]); 
    
    }


    
    public function Login(Request $request)
    {
        // $seller = SellerMan::all();
        // return response()->json($seller);

        $validatedData = Validator::make($request->all(),[
            'email' => 'required|email',
            'password' => 'required',
        ]);
           
        if($validatedData->fails()){
            return response()->json([
                'validation_error'=>$validatedData->messages(),
            ]);
        }
        

        else{
        $SellerMan =SellerMan::where('email',$request->email)->first();
     
        if (!$SellerMan || !Hash::check($request->password, $SellerMan->password)) {
            return response()->json([
                'status' => 401, 
                'message'=>'Invalid Credentials',
            ]);
        }
          
       else{
     
        $token= $SellerMan->createToken($SellerMan->email.'_Token')->plainTextToken;
    
        return response()->json([
            'status' => 200, 
            'user' =>$SellerMan->name,
            'role' =>$SellerMan->role_id,
            'id' =>$SellerMan->id,
            'token'=>$token,
            'message'=>'Registered Successfully',
        ]);
          }
       
      }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function Register(Request $request)
    {

        $validatedData = Validator::make($request->all(),[
            'name' => 'required',
            'email' => 'required|email|unique:seller_men',
            'address' => 'required',
            'gender' => 'required',
            'phone' =>'required',
            'birthday' => 'required|date',
            'personalNumber' => 'required',
            'password' => 'required|min:8',
            'role_id' => 'required',
    ]);

    if($validatedData->fails()){
        return response()->json([
            'validation_error'=>$validatedData->messages(),
        ]);
    }

    else{

        $fileImages = [];
        foreach($request->file('image') as $images){
        $imageName = $images->getClientOriginalName();
        $filename =  time() . '.' . $imageName;
        $images->move(public_path('seller_men'),$filename);
    
        $fileImages = $filename;
        }
         $img = json_encode($fileImages);

          $seller = SellerMan::create([
            'name' => $request->name,
            'email'=> $request->email,
            'password'=> Hash::make($request->password),
            'address'=> $request->address,
            'gender'=> $request->gender,
            'phone'=> $request->phone,
            'PhotoOfPersonalID'=>$filename,
            'birthday'=> $request->birthday,
            'personalNumber'=> $request->personalNumber	,
             'role_id'=> $request->role_id,
          ]);

          $token = $seller->createToken($seller->email.'_Token')->plainTextToken;

          return response()->json([
            'status' => 200, 
            'user' => $seller->name,
            'role'=>$seller->role_id,
            'id' =>$seller->id,
            'token'=>$token,
            'message'=>'Registered Successfully',
        ]);

        }

    }

    public function Logout($id){
        $seller = SellerMan::find($id);
       $seller->tokens()->delete();
        return response()->json([
            'status' => 200,
            'message' => 'Logged Out Successfully',
        ]);
    }
    

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
       return 1;   
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        

    $seller = SellerMan::find($id);

    
    if($seller){
        return response()->json([
            'status' => 200, 
            'seller' =>$seller
        ]);
    }

    else{
        return response()->json([
            'status' => 404, 
            'message' =>'No Seller Id Found'
        ]);
    }
     
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    
         public function update(Request $request, $id)
        {
            $seller = SellerMan::find($id);

            if (!$seller) {
                return response()->json(['message' => 'السجل غير موجود'], 404);
            }
            
            $fileImages = $seller->image;
            
            // التحقق من وجود الصورة
            if ($request->hasFile('image')) {
                // حذف الصورة القديمة إذا كانت موجودة
                if ($seller->image) {
                    File::delete(public_path('seller_men/' . $seller->image));
                }
            
                // إضافة الصورة الجديدة
                $fileImages = [];
                foreach($request->file('image') as $images){
                    $imageName = $images->getClientOriginalName();
                    $filename =  time() . '.' . $imageName;
                    $images->move(public_path('seller_men'),$filename);
            
                    $fileImages[] = $filename;
                }
            }
            
            // تحديث السجل بما في ذلك حقل الصورة إذا كانت هناك صورة جديدة
            $seller->update([
                'name' => $request->name,
                'email'=> $request->email,
                'address'=> $request->address,
                'gender'=> $request->gender,
                'phone'=> $request->phone,
                'birthday'=> $request->birthday,
                'personalNumber'=> $request->personalNumber,
                'role_id'=> $request->role_id,
                'PhotoOfPersonalID'=> $filename,
            ]);
            
            $changes = $seller->getChanges();

                if (empty($changes)) {
                    return response()->json(['message' => 'لم يتم إجراء أي تعديل'], 200);
                }
            
            
            return response()->json([
                'message' => 'تم تحديث السجل بنجاح',
                'seller' => $seller
            ]);
            
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $seller = SellerMan::findOrFail($id);

        
        // حذف الصورة إذا كانت موجودة
        if ($seller->image) {
            Storage::delete('seller_men/' . $seller->image);
        }

        $seller->tokens()->delete();

        return response()->json([
            'status' => 200,
            'message' => 'تم حذف البائع بنجاح.'
        ]);
    }

}