<?php

namespace App\Http\Controllers;

use App\Models\Address;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */


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
        $admin =Admin::where('email',$request->email)->first();
     
        if (!$admin || !Hash::check($request->password, $admin->password)) {
            return response()->json([
                'status' => 401, 
                'message'=>'Invalid Credentials',
            ]);
        }
          
       else{
     
        $token= $admin->createToken($admin->email.'_Token')->plainTextToken;
    
        return response()->json([
            'status' => 200, 
            'user' =>$admin->name,
            'role' =>$admin->role_id,
            'id' =>$admin->id,
            'token'=>$token,
            'message'=>'Registered Successfully',
        ]);
       }
      }
    }



    public function index()
    {
        //
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
    public function Register(Request $request)   //Register
    {
        $validatedData = Validator::make($request->all(),[
            'name' => 'required',
            'email' => 'required|email|unique:admins',
            'phone' => 'required',
            'password' => 'required|min:8',
        ]);

         if($validatedData->fails()){
            return response()->json([
                'validation_error'=>$validatedData->messages(),
            ]);
        }
        else{
        // Create new admin
        $admin = Admin::create([
            'name' => $request->name,
            'email'=> $request->email,
            'password'=>Hash::make($request->password),
            'phone'=> $request->phone,   
            'role_id'=>$request->role_id,    
         ]);

         $token = $admin->createToken($admin->email.'_Token')->plainTextToken;
        // Return success response
        return response()->json([
            'status' => 200, 
            'user' => $admin->name,
            'role'=>$admin->role_id,
            'id' =>$admin->id,
            'token'=>$token,
            'message'=>'Registered Successfully',
        ]);
    }
    
} 


   public function Logout($id){
    $admin = Admin::find($id);
  
   $admin->tokens()->delete();
    
    return response()->json([
        'status' => 200,
        'message' => 'Logged Out Successfully',
    ]);
}
  

    /*
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
