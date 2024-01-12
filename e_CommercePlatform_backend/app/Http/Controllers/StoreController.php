<?php

namespace App\Http\Controllers;

use App\Models\SellerMan;
use App\Models\Store;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class StoreController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index_admin()
    {
        $store = Store::all();
        return response()->json([
           'status' => 200, 
            'store' =>$store,
           'message'=>'Registered Successfully',
       ]);
    }

    public function index_seller($id)
    {
        $store =Store::where("seller_id",$id)->get();

        return response()->json([
           'status' => 200, 
            'store' =>$store,
           'message'=>'Registered Successfully',
       ]);
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
    public function store(Request $request , $id)
    {
        $validatedData = Validator::make($request->all(),[
            'name' => 'required',
            'address' => 'required',
            'description'=>'required',
            'type' => 'required',
            'phone' =>'required',
            'coverPhoto' => '',
            'openTime' => 'required',
            'seller_id' => 'required',
            


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
        $images->move(public_path('stores'),$filename);
    
        $fileImages = $filename;
        }
        //  $img = json_encode($fileImages);

       

          $seller = Store::create([
            'name' => $request->name,
            'address'=> $request->address,
            'description'=> $request->description,
            'personalNumber'=> $request->personalNumber,
            'type'=> $request->type,
            'phone'=> $request->phone,
            'coverPhoto'=>$filename,
            'openTime'=> $request->openTime,
            'seller_id'=> $request->seller_id,
            'created_by'=>$id,
          ]);


          return response()->json([
            'status' => 200, 
            'created_by'=>$id,
            'message'=>'Store added successfully',
        ]);

        }
        
    }

    /**
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
        $store = Store::find($id);

    
    if($store){
        return response()->json([
            'status' => 200, 
            'store' =>$store
        ]);
    }

    else{
        return response()->json([
            'status' => 404, 
            'message' =>'No store Id Found'
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
        $store = Store::find($id);

        if (!$store) {
            return response()->json(['message' => 'السجل غير موجود'], 404);
        }
        
        $fileImages = $store->image;
        
        // التحقق من وجود الصورة
        if ($request->hasFile('image')) {
            // حذف الصورة القديمة إذا كانت موجودة
            if ($store->image) {
                File::delete(public_path('stores/' . $store->image));
            }
            // إضافة الصورة الجديدة
            $fileImages = [];
            foreach($request->file('image') as $images){
                $imageName = $images->getClientOriginalName();
                $filename =  time() . '.' . $imageName;
                $images->move(public_path('stores'),$filename);
        
                $fileImages[] = $filename;
            }
        }
        
        // تحديث السجل بما في ذلك حقل الصورة إذا كانت هناك صورة جديدة
        $store->update([
            'name' => $request->name,
            'address'=> $request->address,
            'description'=> $request->description,
            'personalNumber'=> $request->personalNumber,
            'type'=> $request->type,
            'phone'=> $request->phone,
            'coverPhoto'=>$filename,
            'openTime'=> $request->openTime,
            'seller_id'=> $request->seller_id,
        ]);
        
        $changes = $store->getChanges();

            if (empty($changes)) {
                return response()->json(['message' => 'لم يتم إجراء أي تعديل'], 200);
            }
        
        
        return response()->json([
            'message' => 'تم تحديث السجل بنجاح',
            'store' => $store
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

        $seller->delete();

        return response()->json([
            'status' => 200,
            'message' => 'تم حذف البائع بنجاح.'
        ]);
    }
}
